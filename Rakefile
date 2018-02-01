desc "クローラーでjarファイルを取ってきたい時に使用するタスク"
task :run do
      sh "sh setup.sh"
end
desc "ローカルのファイルを検索エンジンに登録するタスク"
task :clean do
      sh "docker rm -f client; docker rm -f server; docker rm -f dbserver"
end
