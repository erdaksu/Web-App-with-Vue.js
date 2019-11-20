var app = new Vue({
    el: '#search',
    data() {
        return {
            searchQuery: null,
            courses: [
                { 'topic': 'Maths Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/math.html" },
                { 'topic': 'Maths Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/math.html" },
                { 'topic': 'Maths Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/math.html" },
                { 'topic': 'Maths Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/math.html" },

                { 'topic': 'English Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/english.html" },
                { 'topic': 'English Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/english.html" },
                { 'topic': 'English Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/english.html" },
                { 'topic': 'English Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/english.html" },

                { 'topic': 'Science Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/science.html" },
                { 'topic': 'Science Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/science.html" },
                { 'topic': 'Science Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/science.html" },
                { 'topic': 'Science Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/science.html" },

                { 'topic': 'Sports Classes -', 'location': 'Location: Hendon -', 'price': 'Price: £100', 'url': "/sports.html" },
                { 'topic': 'Sports Classes -', 'location': 'Location: Colindale -', 'price': 'Price: £80', 'url': "/sports.html" },
                { 'topic': 'Sports Classes -', 'location': 'Location: Brent Cross -', 'price': 'Price: £90', 'url': "/sports.html" },
                { 'topic': 'Sports Classes -', 'location': 'Location: Golders Green -', 'price': 'Price: £120', 'url': "/sports.html" },
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