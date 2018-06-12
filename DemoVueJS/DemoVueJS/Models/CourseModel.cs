using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoVueJS.Models
{
    public class CourseModel
    {
        public int id { get; set; }
        public string name { get; set; }

        public DateTime startdate { get; set; }
        public int duration { get; set; }

        public string teacher { get; set; }
    }
}
