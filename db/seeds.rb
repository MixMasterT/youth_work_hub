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
Worker.create(username: "Timmy",
            password: "password",
            email: "timmy@oldtimey.com",
            phone_number: '415-641-3619',
            bio: "I love riding my bike, so make a good delivery boy. I have worked delivering newspapers and groceries. If you need anything delivered, I'm your man. I can also do yard work. I hope that I can save up enough money to buy a new bicycle soon!",
            birth_date: "2004-11-16",
            min_wage: 8,
            zip_code: "94314",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484624792/almzrlg2cjyapu3zocss.png")

# Seed some workers
Worker.create(username: "Arnold",
            password: "password",
            email: "arnie@yahoo.com",
            phone_number: '415-228-3622',
            bio: "I love skateboarding. I will entertain you with my excellent skateboarding skills. Hire me as a pro rider!",
            birth_date:"2004-11-21",
            min_wage: 10,
            zip_code:"94235",
            picture_url: "https://res.cloudinary.com/youth-work-hub/image/upload/v1484626488/dfw4azklc4beac7ecqkt.png")

Worker.create(username:"Sam",
            password:"password",
            email:"sammie@computerlovers.com",
            phone_number: '415-228-3619',
            bio:"Ever since I was eight years old I have been called a 'genius' with computers. I am actually pretty good at setting up websites, databases, and whatever else you might need. I will solve your computer problems!",
            birth_date:"2002-10-18",
            min_wage: "20",
            zip_code: "95323",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484628047/mszesro3mz8nixpw5uer.png");

Worker.create(username:"Sarah",
            password:"password",
            email:"sarah@babysitters.com",
            phone_number: '415-228-3619',
            bio:"I love reading books, and I am really looking forward to going to college. However, my family doesn't have a lot of money, so I am trying to earn money now that I can save to help me get through college. I am good with kids, so I can do babysitting or any other household work you might need.",
            birth_date:"2004-8-16",
            zip_code:"97212",
            min_wage: "12",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484588140/txto2vhpouerfnfo52uh.png")


Worker.create(username: 'Ariana',
               email: 'ari@ana.com',
               password:"password",
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
               password:"password",
               bio: 'I am currently in college and looking to earn a little extra spending cash at convenient times. I am very good with children, so  I would be happy to work as a baby-sitter or tutor. Have a great day!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484863263/jm1algptazke1zbjltqp.png',
               zip_code: '93113',
               birth_date: '1998-07-15',
               min_wage: 12)

Worker.create(username: 'Bethany',
               email: 'beth1999@ucsf.com',
               password:"password",
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
               password:"password",
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
               password:"password",
               bio: 'I am a wiz in the kitchen. I have been cooking since before I can remember. If you need help cleaning or cooking, I will be a great helper. I will be looking for your job posts requesting kitchen help!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484865506/uzvwiuvmpeo1appk76oa.png',
               zip_code: '94132',
               birth_date: '2004-11-17',
               min_wage: 12)

Worker.create( username: 'Josie',
               email: 'Joejoe@yahoo.com',
               phone_number: '361-5435-4455',
               password:"password",
               bio: 'I am really into science. I hope I can be a scientist some day. For now, I mostly just read books and study. However, I also want to earn a little extra money to help my family out. Post jobs so I can help you!',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484934755/gh4knkqzjnrqlfztjmsp.png',
               zip_code: '94113',
               birth_date: '2004-03-17',
               min_wage: 9)

Worker.create( username: 'Tina',
               email: 'Tina@marvin.com',
               password:"password",
               phone_number: '441 Rennolds Dr',
               bio: 'Dancing is my life. I love dancing and hope that I can become a professional dancer some day. I know you probably don\'t want to hire me to dance, but I am also good at cleaning, and other household tasks, including baby-sitting. Hope this site works so I can earn some money!.',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484934981/vbwt83ojdsbaenrkhqav.png',
               zip_code: '94225',
               birth_date: '2003-08-15',
               min_wage: 11)

Worker.create( username: 'Maria',
               email: 'mariaStone@gmail.com',
               password:"password",
               phone_number: '4158876655',
               bio: 'Gardening is my favorite thing to do. I love gardening, and lots of people say I have a green thumb. I will help you make your garden beautiful. I look forward to helping you soon!.',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484935685/kq59qj2mm0vwdlawhwwb.png',
               zip_code: '94223',
               birth_date: '2007-12-28',
               min_wage: 7)

Worker.create( username: 'Maurice',
               email: 'mauriceJenkins@gmail.com',
               password:"password",
               phone_number: '415-883-7214',
               bio: 'I am a junior at Franklin high school. I do what I can to help out in my home. I am good at yard work and heavy lifting. I am also good at playing the guitar. I hope that I can help you accomplish jobs that you need done.',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484935958/l4fipaeeqozrovpksxi5.png',
               zip_code: '94552',
               birth_date: '1999-07-15',
               min_wage: 12)

Worker.create( username: 'Emilio',
               email: 'emilioBrown@gmail.com',
               password:"password",
               phone_number: '415-837-8865',
               bio: 'My name is Emilio. I like animals. I am very good with dogs. I can take care of your cat or dog. I can also wash them. I will do other work too. I look forward to accepting your jobs!',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484937816/bcmirku6roigrjiqhqn5.png',
               zip_code: '94332',
               birth_date: '2005-03-09',
               min_wage: 8)

Worker.create( username: 'Becky',
               email: 'rebecca_langly@gmail.com',
               password:"password",
               phone_number: '415-684-2241',
               bio: 'As a high school student, I haver certain financial needs. I am willing to do work to help pay for the things I want. Please post jobs so I can take them. I am good at science, math and art. I can do tutoring, child-care, pet-care, and other things. Have  a great day!',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484938202/tz75fu33kvzqnux1kir3.png',
               zip_code: '94334',
               birth_date: '2001-11-28',
               min_wage: 10)

Worker.create( username: 'Jessica',
               email: 'JessieWinter@yahoo.com',
               phone_number: '2768848311',
               bio: 'I am a high-school student with big dreams. In order to make my dreams come true, I will need some money, however. That\'s why I have joined up with Youth Work Hub. I look forward to doing some odd jobs to help you and earn some money. ',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484941770/riiqnn0gyyx8cq5skrze.png',
               zip_code: '94225',
               birth_date: '2001-11-17',
               min_wage: 14)

Worker.create( username: 'Melanie',
               email: 'melanietimbers@hugo.com',
               password:"password",
               phone_number: '415-887-8645',
               bio: 'I am starting college soon and looking to make a little spending cash to help pay for that. I can be very helpful in just about any type of task. I look forward to helping you!',
               lat: '',
               lng: '',
               picture_url: '',
               zip_code: '94112',
               birth_date: '2001-10-16',
               min_wage: 12)


Job.create( description: 'Wash my dogs. I have two golden retrievers. They need to be washed once every week.',
            user_id: 1,
            job_type: 'cleaning',
            status: 'pending',
            address: '7445 Clarmount St. San Francisco',
            duration: 1,
            wage: 25,
            start_time: '2017-01-28T18:00:00.000Z',
            cost: 25)

Job.create( description: 'Rake Leaves from our yard.',
            user_id: 1,
            worker_id: 1,
            job_type: 'yard-work',
            status: 'designated',
            address: '6745 Rockmill dr. Oakland CA',
            duration: 2,
            wage: 10,
            start_time: '2017-02-04T16:00:00.000Z',
            cost: 20)

Job.create( description: 'Take my dogs for a walk.',
            user_id: 1,
            worker_id: 1,
            job_type: 'baby-sitting',
            status: 'designated',
            address: '7745 Woodsmill Dr.',
            duration: 1,
            wage: 15,
            start_time: '2017-02-11T15:30:00.000Z',
            cost: 15)

Job.create( description: 'Clean my garage. There is lots of old stuff that you can have, including a 10-speed bicycle!',
            user_id: 1,
            job_type: 'cleaning',
            status: 'pending',
            address: '653 Raymont. San Francisco',
            duration: 4,
            wage: 10,
            start_time: '2017-01-14T14:00:00.000Z',
            cost: 40)

Job.create( description: 'Play music for my daughters birthday party. You must be able to play a sing-along version of Happy Birthday!!!',
            user_id: 1,
            job_type: 'music',
            status: 'pending',
            address: '653 Mill Rd.',
            duration: 2,
            wage: 20,
            start_time: '2017-02-18T15:00:00.000Z',
            cost: 40)

Job.create( description: 'Clean my kitchen',
            user_id: 1,
            job_type: 'cleaning',
            status: 'pending',
            address: '641 Renolds Dr',
            duration: 2,
            wage: 12,
            start_time: '2017-02-04T16:00:00.000Z',
            cost: 24)

Job.create( description: 'Stay with my daughter, and play games with her while I go on a date with my wife.',
            user_id: 1,
            job_type: 'baby-sitting',
            status: 'pending',
            address: '7230 Hart. Rd. San Francisco',
            duration: 5,
            wage: 12,
            start_time: '2017-02-14T17:30:00.000Z',
            cost: 60)

Job.create( description: 'Fix my website so that it looks nice. The functionality is OK, but the design really needs help. It would really help if you are good with CSS.',
            job_type: 'computer work',
            user_id: 1,
            worker_id: 3,
            status: 'designated',
            address: '7461 Willis Dr.',
            duration: 5,
            wage: 20,
            start_time: '2017-01-28T12:00:00.000Z',
            cost: 100)

Job.create( description: 'Wash my car. You will need to wash the outside, and vacuum out the inside. I have  a vacuum cleaner that works well.',
            user_id: 1,
            job_type: 'cleaning',
            status: 'pending',
            address: '8220 Lone Wolf Dr.',
            duration: 1,
            wage: 15,
            start_time: '2017-02-11T12:00:00.000Z',
            cost: 15)

Job.create( description: 'Type a hand-written piece of writing that I have done into MS word.',
            job_type: 'computer work',
            user_id: 1,
            worker_id: 3,
            status: 'designated',
            address: '5451 Lamont',
            duration: 3,
            wage: 12,
            start_time: '2017-02-04T16:00:00.000Z',
            cost: 36)

Job.create( description: 'Make a giant card for my anniversary. My wife and I will be married for 25 years!',
            user_id: 1,
            job_type: 'art',
            status: 'pending',
            address: '6520 Hart Dr.',
            duration: 3,
            wage: 15,
            start_time: '2017-03-10T17:00:00.000Z',
            cost: 45)

Job.create( description: 'Help me fix my roof',
            user_id: 2,
            job_type: 'yard-work',
            status: 'fulfilled',
            address: '6520 Hart Dr.',
            duration: 3,
            wage: 15,
            start_time: '2017-01-10T14:00:00.000Z',
            cost: 45)

Review.create( user_id: 2,
               job_id: 12,
               body: "He did a great job!",
               rating: 5)

five_users = (1..5).to_a
five_users.each do |n|
  User.create(username: "U#{n}", password:"#{n.to_s * 6}", email:"u#{n}@u.com")
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
