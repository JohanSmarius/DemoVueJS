using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DemoVueJS.Models;

namespace DemoVueJS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var courses = new List<CourseModel>
            {
                new CourseModel()
                {
                    Name = "C# For Beginners",
                    Duration = 40,
                    StartDate = new DateTime(2018, 09, 01),
                    Teacher = "Johan"
                },
                new CourseModel()
                {
                    Name = "ASP.NET MVC For Beginners",
                    Duration = 40,
                    StartDate = new DateTime(2018, 09, 07),
                    Teacher = "Johan"
                },
                new CourseModel()
                {
                    Name = "HTML For Designers",
                    Duration = 32,
                    StartDate = new DateTime(2018, 10, 10),
                    Teacher = "Kim"
                }
            };

            return View(courses);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult AddCourse()
        {
            return View();
        }
    }
}
