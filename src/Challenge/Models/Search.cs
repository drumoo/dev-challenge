using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Challenge.Models
{
    public sealed class Search
    {
        public string query = "";
        private Search(){}

        private static readonly Search instance = new Search();

        public static Search GetInstance()
        {
            return instance;
        }
    }
}