
using System.ComponentModel.DataAnnotations;
using System.Text.Json;

using dotnetApi.services;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Authorization;

WebHost.CreateDefaultBuilder().
ConfigureServices(s =>
{
    IConfiguration appsettings = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
    s.AddSingleton<Login>();
    s.AddSingleton<Register>();
    s.AddSingleton<VerifyOTP>();
    s.AddSingleton<ServiceSmsSource>();

    s.AddAuthorization();
    s.AddControllers();
    s.AddCors(options =>
                  {
                      options.AddPolicy("AllowAnyOrigin",
                          builder =>
                          {
                              builder.AllowAnyOrigin()
                                     .AllowAnyHeader()
                                     .AllowAnyMethod();
                          });
                  });


}).Configure(app =>
{

    app.UseCors("AllowAnyOrigin");
    app.UseRouting();
    app.UseStaticFiles();

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(e =>
    {
        var login = e.ServiceProvider.GetRequiredService<Login>();

        e.MapPost("login",
     [AllowAnonymous] async (HttpContext http) =>
     {
         var body = await new StreamReader(http.Request.Body).ReadToEndAsync();
         requestData rData = JsonSerializer.Deserialize<requestData>(body);
         if (rData.eventID == "1001") // update
             await http.Response.WriteAsJsonAsync(await login.loginUser(rData));
         if (rData.eventID == "1002") // update
             await http.Response.WriteAsJsonAsync(await login.sendOtp(rData));
         if (rData.eventID == "1003") // update
             await http.Response.WriteAsJsonAsync(await login.UpdatePassword(rData));

     });



        var register = e.ServiceProvider.GetRequiredService<Register>();
        e.MapPost("registration",
        [AllowAnonymous] async (HttpContext http) =>
        {
            var body = await new StreamReader(http.Request.Body).ReadToEndAsync();
            requestData rData = JsonSerializer.Deserialize<requestData>(body);
            if (rData.eventID == "1006") // update
                await http.Response.WriteAsJsonAsync(await register.Registration(rData));
            if (rData.eventID == "1007") // update
                await http.Response.WriteAsJsonAsync(await register.GetUserRegistrationByEmail(rData));
            if (rData.eventID == "1008") // update
                await http.Response.WriteAsJsonAsync(await register.EditUserProfile(rData));
                 if (rData.eventID == "1009") // update
                await http.Response.WriteAsJsonAsync(await register.CheckEmail(rData));
        });




        var otp = e.ServiceProvider.GetRequiredService<VerifyOTP>();

        e.MapPost("otpVerify",
     [AllowAnonymous] async (HttpContext http) =>
     {
         var body = await new StreamReader(http.Request.Body).ReadToEndAsync();
         requestData rData = JsonSerializer.Deserialize<requestData>(body);
         if (rData.eventID == "1001")
             await http.Response.WriteAsJsonAsync(await otp.verifyOTP(rData));

     });



        e.MapGet("/bing",
          async c => await c.Response.WriteAsJsonAsync("{'Name':'Kapil','Age':'22','Project':'FOOD_API'}"));
    });
}).Build().Run();
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
public record requestData
{
    [Required]
    public string eventID { get; set; }
    [Required]
    public IDictionary<string, object> addInfo { get; set; }
}

public record responseData
{
    public responseData()
    {
        eventID = "";
        rStatus = 0;
        rData = new Dictionary<string, object>();
    }
    [Required]
    public int rStatus { get; set; } = 0;
    public string eventID { get; set; }
    public IDictionary<string, object> addInfo { get; set; }
    public IDictionary<string, object> rData { get; set; }
}
