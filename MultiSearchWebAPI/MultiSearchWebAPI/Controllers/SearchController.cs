using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultSearchWebAPI.Domain.DTO;
using MultSearchWebAPI.Services;

namespace MultiSearchWebAPI.Controllers
{
  [Produces("application/json")]
  [Route("api/Search")]
  [EnableCors("AllowCors")]
  public class SearchController : Controller
  {
    // GET: api/Search
    [HttpGet]
    public IActionResult Get()
    {
      SearchService searchService = new SearchService();
      SearchDTO searchDto = searchService.Buscar();
      return Ok(searchDto);
    }

    // GET: api/Search/5
    [HttpGet("{text}", Name = "Get")]
    public IActionResult Get(string text)
    {
      SearchService searchService = new SearchService();
      SearchDTO searchDto = searchService.Buscar(text);
      return Ok(searchDto);
    }
  }
}
