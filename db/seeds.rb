# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Add guest User
User.create(username:"Joe Shmoe",
            password:"password",
            email:"joe@shmow.com",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484531943/ihtivxsbxovc8xo6xfva.png");


# Add guest Worker
Worker.create(username:"Timmy",
            password:"password",
            email:"timmy@oldtimey.com",
            bio:"I love riding my bike, so make a good delivery boy. I have worked delivering newspapers and groceries. If you need anything delivered, I'm your man. I can also do yard work. I hope that I can save up enough money to buy a new bicycle soon!",
            birth_date:"11/21/2004",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484531943/ihtivxsbxovc8xo6xfva.png");

five_users = (1..5).to_a
five_users.each do |n|
  User.create(username: "T#{n}", password:"#{n.to_s * 6}", email:"t#{n}@t.com")
end

five_workers = (1..5).to_a
five_workers.each do |n|
  Worker.create(username: "W#{n}", password:"#{n.to_s * 6}", email:"W#{n}@w.com")
end
