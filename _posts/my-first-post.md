---
title: '初投稿'
excerpt: 'イエーイ！！！！'
date: '2020-03-16T05:35:07.322Z'
author:
  name: "kentarou tawara"
  picture: '/assets/blog/authors/tim.jpeg'
---

初投稿なんだな！！！

こんにちは、たわらです。

`find_or_create_by`ってブロックを取れるんですね。

```ruby
User.find_or_create_by!(email: "hoge@example.com") do |user|
  user.name = "hoge"
end
```

emailで検索してレコードが存在すれば、そのオブジェクトを返却する。もし存在しなければ、引数のemailとブロック内のnameを使ってレコードを新規作成する。

[find_or_create_by | Railsドキュメント](https://railsdoc.com/page/find_or_create_by)
