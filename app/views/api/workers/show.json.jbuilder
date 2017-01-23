json.partial! 'api/workers/worker', worker: @worker
json.reviews @worker.reviews.each do |review|
  json.set! review.id do
    json.extract! review, :rating, :body, :user_id
  end
end

#use json.set! to get skills and add them in for show view only!
#json.set! skills @worker.skills
