using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using MultSearchWebAPI.Domain.DTO;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MultSearchWebAPI.Domain
{
  public class DataContext : IDisposable
  {
    private StreamReader _streamReader;

    public SearchDTO Database { get; }
    public DataContext()
    {

      Database = JsonConvert.DeserializeObject<SearchDTO>(ReadJsonFile());
    }

    private string ReadJsonFile()
    {
      var filePath = Path.Combine(Directory.GetCurrentDirectory(), "data.json");
      _streamReader = new StreamReader(filePath);
      var myJson = _streamReader.ReadToEnd();
      return myJson;
    }

    public void Dispose()
    {
      try
      {
        _streamReader.Close();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        throw;
      }
    }
  }
}
