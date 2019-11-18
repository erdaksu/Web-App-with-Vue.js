var courses = [
    { 'topic': 'math', 'location': 'hendon', 'price': 100 },
    { 'topic': 'math', 'location': 'colindale', 'price': 80 },
    { 'topic': 'math', 'location': 'brent cross', 'price': 90 },
    { 'topic': 'math', 'location': 'golders green', 'price': 120 },
    { 'topic': 'english', 'location': 'hendon', 'price': 110 },
    { 'topic': 'english', 'location': 'colindale', 'price': 90 },
    { 'topic': 'english', 'location': 'brent cross', 'price': 90 },
    { 'topic': 'english', 'location': 'golders green', 'price': 130 },
    { 'topic': 'piano', 'location': 'hendon', 'price': 120 },
    { 'topic': 'piano', 'location': 'golders green', 'price': 140 }
]

var filterApp = newVue({
    el: '#filter',
    data: {
        courses: courses,
        selectedTopic: [],
        selectedLocation: [],
    },
    methods: {
        reset: function () {
            this.selectedTopic = [];
            this.selectedLocation = [];
        }
    },
    computed: {
        filteredCourses: function () {
            var topics = this.selectedTopic, locations = this.selectedLocation;
            return this.courses.filter(function (course) {
                var topicMatch = false, locationMatch = false;
                if (topics.length > 0) {
                    if (topics.includes(course.topic)) {
                        topicMatch = true;
                    }
                }
                else {
                    topicMatch = true;
                }
                if (locations.length > 0) {
                    if (locations.includes(course.location)) {
                        locationMatch = true;
                    }
                }
                else {
                    locationMatch = true;
                }
                return topicMatch && locationMatch
            })
        }
    }

