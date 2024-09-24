// using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;
// using System.Threading.Tasks;
// using MySql.Data.MySqlClient;
// using Microsoft.Extensions.Configuration;

// namespace dotnetApi.services
// {
//     public class Login
//     {
//         private readonly dbServices ds = new dbServices();
//         private readonly serviceSmsSource _ss_sdc = new serviceSmsSource("sourceSMS");

//         public async Task<responseData> login(requestData req)
//         {
//             responseData resData = new responseData();
//             resData.rData["rCode"] = 0;
//             resData.eventID = req.eventID;

//             try
//             {
//                 string input = req.addInfo["UserId"].ToString();
//                 string columnName = IsValidMobileNumber(input) ? "phone" : "email";

//                 MySqlParameter[] myParams = new MySqlParameter[] {
//                 new MySqlParameter("@UserId", input),
//                 new MySqlParameter("@password", req.addInfo["password"].ToString())
//             };

//                 var sq = $"SELECT * FROM pc_student.dependra_signup WHERE {columnName} = @UserId";
//                 var data = ds.ExecuteSQLName(sq, myParams);

//                 if (data == null || data[0].Count() == 0)
//                 {
//                     resData.rData["rCode"] = 1;
//                     resData.rData["rMessage"] = "Invalid Credentials";
//                 }
//                 else
//                 {
//                     var phoneNumber = req.addInfo["UserId"].ToString();
//                     resData.rData["rCode"] = 2;
//                     var otp = new Random().Next(100000, 999999).ToString();
//                     DateTime currentTime = DateTime.Now;
//                     DateTime expirationTime = currentTime.AddMinutes(10);

//                     var TemplateId = "65af50f8d6fc0577c3686ef2";

//                     MySqlParameter[] par = new MySqlParameter[] {
//                     new MySqlParameter("@phone", phoneNumber),
//                     new MySqlParameter("@valid", expirationTime),
//                     new MySqlParameter("@status", 1),
//                     new MySqlParameter("@otp", otp),
//                 };

//                     var otpInsert = $"INSERT INTO OTP_reg(phone, valid, status, otp) VALUES(@phone, @valid, @status, @otp)";
//                     var insert = ds.executeSQL(otpInsert, par);
//                     // var message = "OTP is " + otp.ToString();
//                     // var smsApiResponse = _ss_sdc.SendSMS(phoneNumber, message, otp.ToString());
//                     var msg = " OTP for MedsKey Registration is " + otp.ToString() + ". - SOURCEDOTCOM PVT LTD";
//                     _ss_sdc.SendSMS(phoneNumber, msg, otp);

//                     // resData.rData["rMessage"] = $"OTP generated Successfully. Message Identifier: {smsApiResponse}";
//                 }
//             }
//             catch (Exception ex)
//             {
//                 resData.rData["rCode"] = 1;
//                 resData.rData["rMessage"] = ex.Message;
//             }

//             return resData;
//         }

//         public static bool IsValidEmail(string Email)
//         {
//             string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
//             return Regex.IsMatch(Email, pattern);
//         }

//         public static bool IsValidMobileNumber(string Mobile)
//         {
//             string pattern = @"^[0-9]{7,15}$";
//             return Regex.IsMatch(Mobile, pattern);
//         }
//     }
// }
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

namespace dotnetApi.services
{
    public class Login
    {
        private readonly dbServices ds = new dbServices();
        // private readonly ServiceSmsSource _smsSource; // Using Twilio for SMS

        // public Login(ServiceSmsSource smsSource)
        // {
        //     _smsSource = smsSource;
        // }
        private readonly ServiceSmsSource _ss_sdc;

        public Login(IConfiguration configuration)
        {
            _ss_sdc = new ServiceSmsSource(configuration);
        }



        // public async Task<responseData> login(requestData req)
        // {
        //     responseData resData = new responseData();
        //     resData.rData["rCode"] = 0;
        //     resData.eventID = req.eventID;

        //     try
        //     {
        //         string input = req.addInfo["UserId"].ToString();
        //         string columnName = IsValidMobileNumber(input) ? "phone" : "email";

        //         MySqlParameter[] myParams = new MySqlParameter[] {
        //             new MySqlParameter("@UserId", input),
        //             new MySqlParameter("@password", req.addInfo["password"].ToString())
        //         };

        //         var sq = $"SELECT * FROM pc_student.dependra_signup WHERE {columnName} = @UserId";
        //         var data = ds.ExecuteSQLName(sq, myParams);

        //         if (data == null || data[0].Count() == 0)
        //         {
        //             resData.rData["rCode"] = 1;
        //             resData.rData["rMessage"] = "Invalid Credentials";
        //         }
        //         else
        //         {
        //             var phoneNumber = req.addInfo["UserId"].ToString();
        //             resData.rData["rCode"] = 2;
        //             var otp = new Random().Next(100000, 999999).ToString();
        //             DateTime currentTime = DateTime.Now;
        //             DateTime expirationTime = currentTime.AddMinutes(10);

        //             // No need for TemplateId here if using Twilio

        //             MySqlParameter[] par = new MySqlParameter[] {
        //                 new MySqlParameter("@phone", phoneNumber),
        //                 new MySqlParameter("@valid", expirationTime),
        //                 new MySqlParameter("@status", 1),
        //                 new MySqlParameter("@otp", otp),
        //             };

        //             var otpInsert = $"INSERT INTO OTP_reg(phone, valid, status, otp) VALUES(@phone, @valid, @status, @otp)";
        //             var insert = ds.executeSQL(otpInsert, par);

        //             var msg = " OTP for MedsKey Registration is " + otp.ToString() + ". - SOURCEDOTCOM PVT LTD";
        //             // Use Twilio to send OTP via SMS
        //             await _ss_sdc.SendSmsAsync(phoneNumber, msg);

        //             // resData.rData["rMessage"] = $"OTP generated Successfully. Message Identifier: {smsApiResponse}";
        //         }
        //     }
        //     catch (Exception ex)
        //     {
        //         resData.rData["rCode"] = 1;
        //         resData.rData["rMessage"] = ex.Message;
        //     }

        //     return resData;
        // }

        public async Task<responseData> loginUser(requestData req)
        {
            responseData resData = new responseData();
            resData.rData["rCode"] = 0;
            resData.eventID = req.eventID;
            try
            {
                string input = req.addInfo["UserId"].ToString();
                bool isEmail = IsValidEmail(input);
                // bool isMobileNumber = IsValidMobileNumber(input);
                string columnName;
                if (isEmail)
                {
                    columnName = "email";
                }

                else
                {
                    columnName = "";
                }

                MySqlParameter[] myParams = new MySqlParameter[] {
                new MySqlParameter("@UserId", input),
                new MySqlParameter("@password", req.addInfo["password"].ToString())
                };

                var sq = $"SELECT * FROM pc_student.Kapilfood_signup WHERE {columnName} = @UserId AND password = @password ";
                var data = ds.ExecuteSQLName(sq, myParams);

                if (data == null || data[0].Count() == 0)
                {
                    resData.rData["rCode"] = 1;
                    resData.rData["rMessage"] = "Invalid Credentials";
                }
                else
                {
                    resData.rData["rCode"] = 0;
                    resData.rData["rMessage"] = "Login Successfully";
                }

            }
            catch (Exception ex)
            {
                Console.Write(ex.Message.ToString());
                resData.rStatus = 199;
                resData.rData["rMessage"] = "REMOVE THIS ERROR IN PRODUCTION !!!  " + ex.Message.ToString();
            }
            return resData;
        }


        public static bool IsValidEmail(string Email)
        {
            string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
            return Regex.IsMatch(Email, pattern);
        }

        public static bool IsValidMobileNumber(string Mobile)
        {
            string pattern = @"^\+[0-9]{1,3}[0-9]{7,15}$"; // Allow country code with '+' prefix
            return Regex.IsMatch(Mobile, pattern);
        }

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

                    // Check if the phone number exists in dependra_signup table
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

                    var msg = " OTP for Heat Hit  is " + otp + ". music app";
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
                // Handle exception, log, or return false
                Console.WriteLine("Error while executing query: " + ex.Message);
                return false;
            }
        }

        public async Task<responseData> UpdatePassword(requestData req)
        {
            responseData resData = new responseData();
            resData.rData["rCode"] = 0;
            resData.eventID = req.eventID;

            try
            {
                string userId = req.addInfo["UserId"].ToString();
                string newPassword = req.addInfo["newPassword"].ToString();
                string confirmNewPassword = req.addInfo["confirmNewPassword"].ToString();

                // Check if newPassword and confirmNewPassword match
                if (newPassword != confirmNewPassword)
                {
                    resData.rData["rCode"] = 1;
                    resData.rData["rMessage"] = "New password and confirm password do not match";
                    return resData;
                }

                // Update the password in the database
                MySqlParameter[] myParams = new MySqlParameter[] {
            new MySqlParameter("@UserId", userId),
            new MySqlParameter("@NewPassword", newPassword)
        };

                var sq = $"UPDATE pc_student.Kapilfood_signup SET password = @NewPassword WHERE email = @UserId";
                var affectedRows = ds.ExecuteSQLName(sq, myParams);

                // Check if any rows were affected
                if (affectedRows != null && affectedRows.Count > 0)
                {
                    resData.rData["rCode"] = 0;
                    resData.rData["rMessage"] = "Password updated successfully";
                }
                else
                {
                    resData.rData["rCode"] = 1;
                    resData.rData["rMessage"] = "Failed to update password";
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message.ToString());
                resData.rStatus = 199;
                resData.rData["rMessage"] = "REMOVE THIS ERROR IN PRODUCTION !!!  " + ex.Message.ToString();
            }

            return resData;
        }




    }
}
