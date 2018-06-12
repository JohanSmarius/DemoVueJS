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
                    id = 100,
                    name = "C# For Beginners",
                    duration = 40,
                    startdate = new DateTime(2018, 09, 01),
                    teacher = "Johan"
                },
                new CourseModel()
                {
                    id = 101,
                    name = "ASP.NET MVC For Beginners",
                    duration = 40,
                    startdate = new DateTime(2018, 09, 07),
                    teacher = "Johan"
                },
                new CourseModel()
                {
                    id = 102,
                    name = "HTML For Designers",
                    duration = 32,
                    startdate = new DateTime(2018, 10, 10),
                    teacher = "Kim"
                }
            };
            return courses;
        }

    }
}
