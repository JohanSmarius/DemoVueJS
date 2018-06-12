using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoVueJS.Models
{
    public class CourseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public DateTime StartDate { get; set; }
        public int Duration { get; set; }

        public string Teacher { get; set; }
    }
}
