using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemoVueJS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoVueJS.Controllers
{
    [Produces("application/json")]
    [Route("api/Course")]
    public class CourseController : Controller
    {
        // GET: api/Course
        [HttpGet]
        public IEnumerable<CourseModel> Get()
        {
            var courses = new List<CourseModel>
            {
                new CourseModel()
                {
                    Id = 10,
                    Name = "C# For Beginners",
                    Duration = 40,
                    StartDate = new DateTime(2018, 09, 01),
                    Teacher = "Johan"
                },
                new CourseModel()
                {
                    Id = 11,
                    Name = "ASP.NET MVC For Beginners",
                    Duration = 40,
                    StartDate = new DateTime(2018, 09, 07),
                    Teacher = "Johan"
                },
                new CourseModel()
                {
                    Id = 12,
                    Name = "HTML For Designers",
                    Duration = 32,
                    StartDate = new DateTime(2018, 10, 10),
                    Teacher = "Kim"
                }
            };
            return courses;
        }

    }
}
