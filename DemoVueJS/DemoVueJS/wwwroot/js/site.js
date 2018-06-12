
const EventBus = new Vue();

Vue.use(VeeValidate);

const router = new VueRouter({
    routes // short for `routes: routes`
});


var app = new Vue({
    el: "#app",
    router,
    data: {
        message: "Hello from VueJS",
        //Courses: [
        //    {
        //        id: 1,
        //        name: "VueJS With ASP.NET Core",
        //        startdate: "2018-06-15",
        //        duration: 10,
        //        teacher: "Johan",
        //        //NumberOfStudents: 0
        //    },
        //    {
        //        id: 2,
        //        name: "TypeScript for .NET Developers",
        //        startdate: "2018-06-01",
        //        duration: 5,
        //        teacher: "Johan",
        //        //NumberOfStudents: 0
        //    }
        //],
        totalNumberOfStudents: 0,
        ServerCourses: store.state.courses,
        Courses: store.state.courses,
    
    },
    filters: {
        capitalize: function (value) {
            return value.toUpperCase();
        }
    },
    created() {
        

        // Ctor
        EventBus.$on("add-student", e => this.totalNumberOfStudents += e.data.count);
    },
    computed: {
        alternativeCourses() {
            return store.state.courses;
        },
        sortedCourses() {
            return this.Courses.sort((a, b) => {
                if (a.Date < b.Date) {
                    return -1;
                }

                if (a.Date === b.Date) {
                    return 0;
                }

                if (a.Date > b.Date) {
                    return 1;
                }

            });
        },
        //totalNumberOfStudents() {
        //    var total = 0;
        //    this.Courses.forEach(function(course) {
        //        total = total + course.NumberOfStudents;
        //    });
        //    return total;
        //}
    },
    methods: {
        //addStudent(courseId) {

        //    const selectedCourse = this.Courses.find(course => course.Id === courseId);
        //    selectedCourse.NumberOfStudents++;
        //}
        getCourses() {
            // Ctor
            //EventBus.$on("add-student", e => this.totalNumberOfStudents += e.data.count);
            
            store.getCourses();
        },

    },
    components: {
        'course-details': courseDetails
    }
});
