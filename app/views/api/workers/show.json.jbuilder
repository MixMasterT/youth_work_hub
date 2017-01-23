json.partial! 'api/workers/worker', worker: @worker
json.reviews @worker.reviews.each do |review|
    json.extract! review, :rating, :body, :user_id
end

#use json.set! to get skills and add them in for show view only!
#json.set! skills @worker.skills
