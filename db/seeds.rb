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
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484531943/ihtivxsbxovc8xo6xfva.png")


# Add guest Worker
Worker.create(username:"Timmy",
            password:"password",
            email:"timmy@oldtimey.com",
            bio:"I love riding my bike, so make a good delivery boy. I have worked delivering newspapers and groceries. If you need anything delivered, I'm your man. I can also do yard work. I hope that I can save up enough money to buy a new bicycle soon!",
            birth_date:"11/21/2004",
            zip_code:"94314",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484624792/almzrlg2cjyapu3zocss.png")

Worker.create(username:"Arnold",
            password:"password",
            email:"arnie@yahoo.com",
            bio:"I love skateboarding. I will entertain you with my excellent skateboarding skills. Hire me as a pro rider!",
            birth_date:"11/21/2004",
            zip_code:"94235",
            picture_url: "https://res.cloudinary.com/youth-work-hub/image/upload/v1484626488/dfw4azklc4beac7ecqkt.png")

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
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484588140/txto2vhpouerfnfo52uh.png")


Worker.create(username: 'Ariana',
               email: 'ari@ana.com',
               phone_number: '415-937-6554',
               bio: 'I like getting jobs done. Some say I am a tasker. If you need help getting some work done, I can be very effective!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484862877/bkteagiipnovhojud5tc.png',
               zip_code: '94335',
               birth_date: '2003-06-12',
               min_wage: 6)

Worker.create(username: 'Ellie',
               email: 'elliestar@gmail.com',
               phone_number: '213-565-4875',
               bio: 'I am currently in college and looking to earn a little extra spending cash at convenient times. I am very good with children, so  I would be happy to work as a baby-sitter or tutor. Have a great day!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484863263/jm1algptazke1zbjltqp.png',
               zip_code: '93113',
               birth_date: '1998-07-15',
               min_wage: 12)

Worker.create(username: 'Bethany',
               email: 'beth1999@ucsf.com',
               phone_number: '4156488898',
               bio: 'As a current student at USCS, I am well qualified to serve as a tutor, or as an editor to help you or your children learn. I am especially interested in history and law. I am also a responsible individual who can be trusted with child-care and pet-care.',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484863534/ef23zpehw5qx62jgc57l.png',
               zip_code: '94115',
               birth_date: '1998-09-23',
               min_wage: 15)


Worker.create(username: 'Hugo',
               email: 'HugoGreenwald@yahoo.com',
               phone_number: '418-736-9937',
               bio: 'I am currently a senior in high school. I take school very seriously and look forward to attending college. Obviously, college is very expensive, so I am trying to earn some extra money to help get me through. I am great in the garden, and a good strong worker for moving tasks or any other kinds of work really. Best of luck in finding a worker who suits your needs!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484864909/n3cuolvpgkaexeyu3p89.png',
               zip_code: '96151',
               birth_date: '2002-12-28',
               min_wage: 14)

Worker.create(username: 'Lucy',
               email: 'lucy4157@gmail.com',
               phone_number: '418-227-6179',
               bio: 'I am a wiz in the kitchen. I have been cooking since before I can remember. If you need help cleaning or cooking, I will be a great helper. I will be looking for your job posts requesting kitchen help!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484865506/uzvwiuvmpeo1appk76oa.png',
               zip_code: '94132',
               birth_date: '2004-11-17',
               min_wage: 12)

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

# job_descriptions = { description: "clean my kicthen",
#                      job_type: "cleaning",
#                      duration: 2,
#                      start_time: ,
#                      }
