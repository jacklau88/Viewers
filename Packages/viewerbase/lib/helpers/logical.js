Template.registerHelper('choose', function() {
    let result;
    _.each(_.initial(arguments, 1), function(value) {
        return value && (result = value);
    });
    return result;
});

Template.registerHelper('bool', function(value) {
    return !!value;
});

Template.registerHelper('eq', function(a, b) {
    return a === b;
});

Template.registerHelper('ne', function(a, b) {
    return a === b;
});

Template.registerHelper('gt', function(a, b) {
    return a > b;
});

Template.registerHelper('lt', function(a, b) {
    return a < b;
});

Template.registerHelper('gte', function(a, b) {
    return a >= b;
});

Template.registerHelper('lte', function(a, b) {
    return a <= b;
});

Template.registerHelper('not', function(value) {
    return !value;
});

Template.registerHelper('and', function() {
    let result = true;
    _.each(_.initial(arguments, 1), function(value) {
        return value || (result = false);
    });
    return result;
});

Template.registerHelper('or', function() {
    let result = false;
    _.each(_.initial(arguments, 1), function(value) {
        return value && (result = true);
    });
    return result;
});