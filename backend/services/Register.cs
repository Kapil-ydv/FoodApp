using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Org.BouncyCastle.Ocsp;

namespace dotnetApi.services
{
    public class Register
    {
        dbServices ds = new dbServices();
          private readonly ServiceSmsSource _ss_sdc;

        public Register(IConfiguration configuration)
        {
            _ss_sdc = new ServiceSmsSource(configuration);
        }

        public async Task<responseData> Registration(requestData r)
        {
            responseData resData = new responseData();
            resData.rData["rCode"] = 0;
            resData.rData["rMessage"] = "Student registered successfully";

            try
            {
                MySqlParameter[] para = new MySqlParameter[] {
            new MySqlParameter("@password", r.addInfo["password"].ToString()),
            new MySqlParameter("@name", r.addInfo["name"].ToString()),
            new MySqlParameter("@phone", r.addInfo["phone"].ToString()),
            new MySqlParameter("@email", r.addInfo["email"].ToString()),


        };

                var checkSql = $"SELECT * FROM Kapilfood_signup WHERE phone=@phone OR email=@email;";
                var checkResult = ds.executeSQL(checkSql, para);



                if (checkResult[0].Count() != 0)
                {
                    resData.rData["rCode"] = 2;
                    resData.rData["rMessage"] = "Duplicate data found";
                }
                else
                {
                    var insertSql = $"INSERT INTO Kapilfood_signup( name, phone, email, password) VALUES(@name, @phone, @email, @password);";
                    var insertId = ds.ExecuteInsertAndGetLastId(insertSql, para);

                    if (insertId != null)
                    {
                        resData.eventID = r.eventID;
                        resData.rData["rMessage"] = "Registration Successfully";


                    }

                }
            }
            catch (Exception ex)
            {
                resData.rData["rCode"] = 1;
                resData.rData["rMessage"] = $"Error: {ex.Message}";

            }

            return resData;

        }

//      public async Task<responseData> Registration(requestData r)
// {
//     responseData resData = new responseData();
//     resData.rData["rCode"] = 0;
//     resData.rData["rMessage"] = "Student registered successfully";

//     try
//     {
//         MySqlParameter[] para = new MySqlParameter[] {
//             new MySqlParameter("@password", r.addInfo["password"].ToString()),
//             new MySqlParameter("@name", r.addInfo["name"].ToString()),
//             new MySqlParameter("@phone", r.addInfo["phone"].ToString()),
//             new MySqlParameter("@email", r.addInfo["email"].ToString()),
//         };

//         var checkSql = $"SELECT * FROM Kapil_signup WHERE phone=@phone OR email=@email;";
//         var checkResult = ds.executeSQL(checkSql, para);

//         if (checkResult[0].Count() != 0)
//         {
//             resData.rData["rCode"] = 2;
//             resData.rData["rMessage"] = "Duplicate data found";
//         }
//         else
//         {
//             var insertSql = $"INSERT INTO Kapil_signup( name, phone, email, password) VALUES(@name, @phone, @email, @password);";
//             var insertId = ds.ExecuteInsertAndGetLastId(insertSql, para);

//             if (insertId != null)
//             {
//                 // Prepare data for sending OTP
//                 requestData otpRequestData = new requestData();
//                 otpRequestData.addInfo = new Dictionary<string, object>();
//                 otpRequestData.addInfo["UserId"] = r.addInfo["phone"]; // Pass phone number to sendOtp method
//                 otpRequestData.eventID = r.eventID;

//                 // Call sendOtp method to generate and send OTP
//                 var otpResponse = await sendOtp(otpRequestData);

//                 // // Update response message based on OTP sending result
//                 if (otpResponse.rData["rCode"].ToString() == "2")
//                 {
//                     resData.rData["rMessage"] = "Registration Successful. OTP has been sent.";
//                 }
//                 else
//                 {
//                     resData.rData["rMessage"] = "Registration Successful. Failed to send OTP.";
//                 }
//                 // resData.rData["rMessage"] = "Registration Successful. OTP has been sent.";
//             }
//         }
//     }
//     catch (Exception ex)
//     {
//         resData.rData["rCode"] = 1;
//         resData.rData["rMessage"] = $"Error: {ex.Message}";
//     }

//     return resData;
// }


 public async Task<responseData> sendOtp(requestData req)
        {
            responseData resData = new responseData();
            resData.rData["rCode"] = 0;
            resData.eventID = req.eventID;

            try
            {
                // Check if 'UserId' exists in 'addInfo' and if it's not null
                if (req.addInfo != null && req.addInfo.ContainsKey("UserId") && req.addInfo["UserId"] != null)
                {
                    string phoneNumber = req.addInfo["UserId"].ToString();

                    // Check if the phone number exists in  table
                    bool phoneNumberExists = CheckPhoneNumberExists(phoneNumber);

                    if (!phoneNumberExists)
                    {
                        resData.rData["rCode"] = 1;
                        resData.rData["rMessage"] = "Invalid phone number.";
                        return resData;
                    }

                    resData.rData["rCode"] = 2;
                    var otp = new Random().Next(100000, 999999).ToString();
                    DateTime currentTime = DateTime.Now;
                    DateTime expirationTime = currentTime.AddMinutes(10);

                    // Save OTP in the OTP_reg table
                    MySqlParameter[] otpParams = new MySqlParameter[] {
                new MySqlParameter("@phone", phoneNumber),
                new MySqlParameter("@valid", expirationTime),
                new MySqlParameter("@status", 1),
                new MySqlParameter("@otp", otp),
            };

                    var otpInsertQuery = $"INSERT INTO OTP_reg(phone, valid, status, otp) VALUES(@phone, @valid, @status, @otp)";
                    var otpInsertResult = ds.executeSQL(otpInsertQuery, otpParams);

                    var msg = " OTP for foodapp   is " + otp + ". - foodapp";
                    // Use Twilio or another SMS service to send OTP via SMS
                    await _ss_sdc.SendSmsAsync(phoneNumber, msg);

                    // Optionally, you can return the generated OTP in the response for testing purposes
                    resData.rData["rMessage"] = $"OTP generated Successfully. OTP: {otp}";
                }
                else
                {
                    resData.rData["rCode"] = 1;
                    resData.rData["rMessage"] = "UserId is missing or null in the request.";
                }
            }
            catch (Exception ex)
            {
                resData.rData["rCode"] = 1;
                resData.rData["rMessage"] = ex.Message;
            }

            return resData;
        }


        
        private bool CheckPhoneNumberExists(string phoneNumber)
        {
            try
            {
                using (MySqlConnection connection = new MySqlConnection("server=210.210.210.50;user=test_user;password=test*123;port=2020;database=pc_student;"))
                {
                    connection.Open();
                    string query = "SELECT COUNT(*) FROM Kapilfood_signup WHERE phone = @phone";
                    MySqlCommand command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@phone", phoneNumber);
                    int count = Convert.ToInt32(command.ExecuteScalar());
                    return count > 0;
                }
            }
            catch (Exception ex)
            {
                // Handle exception, log, or return false
                Console.WriteLine("Error while executing query: " + ex.Message);
                return false;
            }
        }
        public async Task<responseData> CheckEmail(requestData req)
{
    responseData resData = new responseData();
    resData.rData["rCode"] = 0;
    resData.eventID = req.eventID;

    try
    {
        // Check if 'Email' exists in 'addInfo' and if it's not null
        if (req.addInfo != null && req.addInfo.ContainsKey("UserId") && req.addInfo["UserId"] != null)
        {
            string email = req.addInfo["UserId"].ToString();

            // Check if the email exists in the table
            bool emailExists = CheckEmailExists(email);

            if (!emailExists)
            {
                resData.rData["rCode"] = 1;
                resData.rData["rMessage"] = "Email address not registered.";
            }
            else
            {
                resData.rData["rCode"] = 2;
                resData.rData["rMessage"] = "Email address is valid.";
            }
        }
        else
        {
            resData.rData["rCode"] = 1;
            resData.rData["rMessage"] = "Email is missing or null in the request.";
        }
    }
    catch (Exception ex)
    {
        resData.rData["rCode"] = 1;
        resData.rData["rMessage"] = ex.Message;
    }

    return resData;
}

private bool CheckEmailExists(string email)
{
    try
    {
        using (MySqlConnection connection = new MySqlConnection("server=210.210.210.50;user=test_user;password=test*123;port=2020;database=pc_student;"))
        {
            connection.Open();
            string query = "SELECT COUNT(*) FROM Kapilfood_signup WHERE email = @email";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@email", email);
            int count = Convert.ToInt32(command.ExecuteScalar());
            return count > 0;
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine("Error while executing query: " + ex.Message);
        return false;
    }
}

        
        public async Task<responseData> GetUserRegistrationByEmail(requestData req)
        {
            responseData resData = new responseData();
            resData.eventID = req.eventID;
            resData.rData["rCode"] = 0;
            resData.rData["rMessage"] = "User Details Retrieved Successfully";

            try
            {
                string input = req.addInfo["email"].ToString(); // Assuming the email is in "email" field
                MySqlParameter[] myParams = new MySqlParameter[] {
            new MySqlParameter("@Email", input)
        };

                var sql = "SELECT * FROM Kapilfood_signup WHERE email=@Email;";
                var data = ds.ExecuteSQLName(sql, myParams);

                if (data == null || data[0].Count() == 0)
                {
                    resData.rData["rCode"] = 1;
                    resData.rData["rMessage"] = "User not found";
                }
                else
                {
                    // Assuming you have specific keys in responseData for user details
                    // resData.rData["Id"] = data[0][0]["id"];
                     resData.rData["name"] = data[0][0]["name"];
                    resData.rData["phone"] = data[0][0]["phone"];
                    resData.rData["email"] = data[0][0]["email"];
                    resData.rData["image"] = data[0][0]["image"];
                     resData.rData["newphone"] = data[0][0]["newphone"];
                      resData.rData["address"] = data[0][0]["address"];
                    // Add more properties as needed
                }
            }
            catch (Exception ex)
            {
                resData.rData["rCode"] = 1;
                resData.rData["rMessage"] = $"Error: {ex.Message}";
            }

            return resData;
        }



       public async Task<responseData> EditUserProfile(requestData r)
{
    responseData resData = new responseData();
    resData.rData["rCode"] = 0;
    resData.rData["rMessage"] = "Profile updated successfully";

    try
    {
        string base64Image = r.addInfo["image"].ToString();
        
        
        byte[] imageBytes = Convert.FromBase64String(base64Image);

        MySqlParameter[] para = new MySqlParameter[] {
            new MySqlParameter("@name", r.addInfo["name"].ToString()),
            new MySqlParameter("@phone", r.addInfo["phone"].ToString()),
            new MySqlParameter("@email", r.addInfo["email"].ToString()),
            // new MySqlParameter("@password", r.addInfo["email"].ToString()),
            new MySqlParameter("@image", imageBytes), 
            new MySqlParameter("@newphone", r.addInfo["newphone"].ToString()),
            new MySqlParameter("@address", r.addInfo["address"].ToString())
        };

        var updateSql = $"UPDATE Kapilfood_signup SET name = @name, address= @address , newphone = @newphone ,email = @email, " +
                        $"image = @image WHERE phone = @phone;";

        int rowsAffected = ds.ExecuteNonQuery(updateSql, para);

        if (rowsAffected > 0)
        {
            resData.eventID = r.eventID;
            resData.rData["rMessage"] = "Profile updated successfully";
        }
        else
        {
            resData.rData["rCode"] = 2;
            resData.rData["rMessage"] = "No user found with the provided ID";
        }
    }
    catch (Exception ex)
    {
        resData.rData["rCode"] = 1;
        resData.rData["rMessage"] = $"Error: {ex.Message}";
    }

    return resData;
}



    }
}