$i = 1
Get-ChildItem *.jpg | %{Rename-Item $_ -NewName ('nl-{0}.jpg' -f $i++)}
