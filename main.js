var app = new Vue({
    el: '#search',
    data() {
        return {
            searchQuery: null,
            courses: [
                { 'topic': 'Maths Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/courses/math.html" },
                { 'topic': 'Maths Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/courses/math.html" },
                { 'topic': 'Maths Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/courses/math.html" },
                { 'topic': 'Maths Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/math.html" },

                { 'topic': 'English Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/courses/english.html" },
                { 'topic': 'English Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/courses/english.html" },
                { 'topic': 'English Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/courses/english.html" },
                { 'topic': 'English Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/courses/english.html" },

                { 'topic': 'Science Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/courses/science.html" },
                { 'topic': 'Science Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/courses/science.html" },
                { 'topic': 'Science Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/courses/science.html" },
                { 'topic': 'Science Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/courses/science.html" },

                { 'topic': 'Sports Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/courses/sports.html" },
                { 'topic': 'Sports Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/courses/sports.html" },
                { 'topic': 'Sports Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/courses/sports.html" },
                { 'topic': 'Sports Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/courses/sports.html" },
            ]
        };
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.courses.filter((item) => {
                    return this.searchQuery.toLowerCase().split(' ').every(a => item.topic.toLowerCase().includes(a))
                })
            } else {
                return this.courses;
            }
        }
    }


})

var vm = new Vue({
	el:  "#filtercourses",
	data: {
		courses: [
            { topic: 'Maths', location: 'Hendon', price: '£100'},
            { topic: 'Maths', location: 'Colindale', price: '£80'},
            { topic: 'Maths', location: 'Brent_Cross', price: '£90'},
            { topic: 'Maths', location: 'Golders_Green', price: '£120'},

            { topic: 'English', location: 'Hendon', price: '£100'},
            { topic: 'English', location: 'Colindale', price: '£80'},
            { topic: 'English', location: 'Brent_Cross', price: '£90'},
            { topic: 'English', location: 'Golders_Green', price: '£120'},

            { topic: 'Science', location: 'Hendon', price: '£100'},
            { topic: 'Science', location: 'Colindale', price: '£80'},
            { topic: 'Science', location: 'Brent_Cross', price: '£90'},
            { topic: 'Science', location: 'Golders_Green', price: '£120'},

            { topic: 'Sports', location: 'Hendon', price: '£100'},
            { topic: 'Sports', location: 'Colindale', price: '£80'},
            { topic: 'Sports', location: 'Brent_Cross', price: '£90'},
            { topic: 'Sports', location: 'Golders_Green', price: '£120'},

            ],
        selectedCourse: "All",
        selectedLocation: "All",
        selectedPrice: "All"
	},
	computed: {
		filteredCourses: function() {
			var vm = this;
            var topic = vm.selectedCourse;

			if (topic=== "All") {
				return vm.courses;
			} else {
				return vm.courses.filter(function(course) {
					return course.topic === topic;
				});
			}
        },
        filteredLocations: function () {
            var vm = this;
            var location = vm.selectedLocation;

			if (location=== "All") {
				return vm.courses;
			} else {
				return vm.courses.filter(function(course) {
					return course.location === location;
				});
			}
        },
        filteredPrices: function () {
            var vm = this;
            var price = vm.selectedPrice;

			if (price=== "All") {
				return vm.courses;
			} else {
				return vm.courses.filter(function(course) {
					return course.price === price;
				});
			}
        },
	}
});
