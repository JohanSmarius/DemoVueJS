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
