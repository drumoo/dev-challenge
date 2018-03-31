using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;

namespace MultiSearchWebAPI
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc()
        .AddJsonOptions(options =>
        {
          options.SerializerSettings.ContractResolver
            = new Newtonsoft.Json.Serialization.DefaultContractResolver();
        }); ;

      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = System.Reflection.Assembly.GetExecutingAssembly().GetName().Name, Version = "v1" });
      });

      services.AddCors(o => o.AddPolicy("AllowCors", builder =>
      {
        builder.AllowAnyOrigin()
          .AllowAnyHeader()
          .AllowAnyMethod()
          .AllowAnyOrigin()
          .AllowCredentials();
      }));

      //services.AddCors(
      //  options => options.AddPolicy("AllowCors",
      //    builder =>
      //    {
      //      builder
      //        .AllowAnyOrigin() //AllowAllOrigins;
      //        .WithOrigins("http://localhost:4200") //AllowSpecificOrigin;
      //        .WithOrigins("http://localhost:4200", "http://localhost:4200"); //AllowMultipleOrigins;

      //    })
      //);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      app.UseSwagger(c =>
      {
        c.PreSerializeFilters.Add((swaggerDoc, httpReq) => swaggerDoc.Host = httpReq.Host.Value);
      });

      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", System.Reflection.Assembly.GetExecutingAssembly().GetName().Name + "V1");
      });
      app.UseMvc();
      app.UseCors("AllowCors");
    }
  }
}
