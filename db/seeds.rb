50.times do
  user = User.create(
    name: Faker::Name.first_name,
    nickname: Faker::Internet.username,
    email: Faker::Internet.email,
    password: "password",
    image: Faker::Avatar.image,
  )
  10.times do
    user.posts.create(
      body: Faker::Quote.famous_last_words,
    )
  end
end

puts "50 users with 10 posts created"