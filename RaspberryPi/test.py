import urllib.request
import json
import mysql.connector
import datetime

now = datetime.datetime.now()
year=now.year
month=now.month
day=now.day
date=(year,month,day)
#full_date="-".join(date)
print(month)
actual_date=str(now.year)+"-"+str(now.month)+"-"+str(now.day)+" "+str(now.hour)+":00:00"
print(actual_date)