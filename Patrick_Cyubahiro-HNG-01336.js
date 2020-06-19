exports.findById = [
con.query("SELECT mda_name, expense, date FROM DATABASE_NAME", function (err, result, fields)) {
if (err) throw err;
console.log('The mda name that contracted the project:');
console.log(mda_name);
}
]