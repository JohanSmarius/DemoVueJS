const courseDetails = {
    name: 'course-details',
    template: `<div>
                    <div>
                        <label for="name">Name</label><input v-model="course.name" name="name" v-validate="'required'"></input>
                        <span>{{ errors.first('name') }}</span>
                    </div>
                    <div>{{course.startdate}}</div>
                    <div>
                        <label for="duration">Duration</label><input v-model="course.duration" name="duration" type="number" v-validate="{ min_value: 0, max_value:100 }"></input>
                        <span>{{ errors.first('duration') }}</span>
                        <span v-if="isInvalidDuration">Duration > 0</span>
                    </div>

                    <div>{{course.duration}}</div>
                    <div>{{course.teacher}}</div>
                    <div>{{this.NumberOfStudents}}</div>
                    <div><button v-on:click="addStudent(course.Id)">RSVP</button></div>
                    <div><button @click="save()">Save changes</button></div>
                </div>`,
    data() {
        return {
            numberOfStudents: 0
        }
    },
    props: ['course', 'courses'],
    methods: {
        addStudent(courseId) {
            this.numberOfStudents++;
            EventBus.$emit('add-student',
                {
                    data: {
                        count: this.numberOfStudents
                    }
                });
        },
        saveChanges() {
        }
    },
    computed: {
        isInvalidDuration() {
            return this.course.duration <= 0;
        }

    }
};
