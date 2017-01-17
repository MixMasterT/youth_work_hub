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
            zip_code:"94314",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484624792/almzrlg2cjyapu3zocss.png");

Worker.create(username:"Arnold",
            password:"password",
            email:"arnie@yahoo.com",
            bio:"I love skateboarding. I will entertain you with my excellent skateboarding skills. Hire me as a pro rider!",
            birth_date:"11/21/2004",
            zip_code:"94235",
            picture_url: "https://res.cloudinary.com/youth-work-hub/image/upload/v1484626488/dfw4azklc4beac7ecqkt.png");

Worker.create(username:"Sam",
            password:"password",
            email:"sammie@computerlovers.com",
            bio:"Ever since I was eight years old I have been called a 'genius' with computers. I am actually pretty good at setting up websites, databases, and whatever else you might need. I will solve your computer problems!",
            birth_date:"10/18/2002",
            min_wage: "20",
            zip_code: "95323",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484628047/mszesro3mz8nixpw5uer.png");

Worker.create(username:"Sarah",
            password:"password",
            email:"sarah@babysitters.com",
            bio:"I love reading books, and I am really looking forward to going to college. However, my family doesn't have a lot of money, so I am trying to earn money now that I can save to help me get through college. I am good with kids, so I can do babysitting or any other household work you might need.",
            birth_date:"5/28/2004",
            zip_code:"97212",
            min_wage: "12",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484588140/txto2vhpouerfnfo52uh.png");

five_users = (1..5).to_a
five_users.each do |n|
  User.create(username: "T#{n}", password:"#{n.to_s * 6}", email:"t#{n}@t.com")
end

five_workers = (1..5).to_a
five_workers.each do |n|
  Worker.create(username: "W#{n}",
                  password:"#{n.to_s * 6}",
                  email:"W#{n}@w.com",
                  zip_code: "94131")
end
