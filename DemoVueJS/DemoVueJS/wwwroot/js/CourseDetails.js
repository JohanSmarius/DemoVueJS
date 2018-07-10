const courseDetails = {
    name: 'course-details',
    template: `<div>
                    <div>
                        <label for="name">Name</label><input v-model="course.name" name="name" v-validate="'required'"><span>{{ errors.first('name') }}</span>
                    </div>
                    <div>{{course.startdate}}</div>
                    <div>
                        <label for="duration">Duration</label><input v-model="course.duration" name="duration" type="number" v-validate="{ min_value: 0, max_value:100 }">
                            <span v-if="isInvalidDuration">Duration > 0</span>
<span>{{ errors.first('duration') }}</span>
                     </div>

                    <div>{{course.duration}}</div>
                    <div>{{course.teacher}}</div>
                    <div>{{course.NumberOfStudents}}</div>
                    <div><button v-on:click="addStudent(course.id)">RSVP</button></div>
                </div>`,
    methods: {
        addStudent(courseId) {
            this.numberOfStudents++;
            EventBus.$emit('add-student',
                {
                    data: {
                        count: 1
                    }
                });
        }
    },
    props: ['course', 'courses'],
    data() {
        return {
            numberOfStudents: 0
        }
    },
    computed: {
        isInvalidDuration() {
            return this.course.duration <= 0;
        }

    }
};