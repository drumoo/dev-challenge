using Challenge.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Challenge.Controllers
{
    public class SearchController : ApiController
    {
        public void Get(string txt_search)
        {
            Search.GetInstance().query = txt_search; //Atribuindo ao atributo query da única instância de Search o valor da pesquisa
        }
    }
}
