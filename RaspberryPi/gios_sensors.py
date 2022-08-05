import urllib.request
import json
import mysql.connector
import datetime


def insert_gios_sensors(s_id,city_name,address_street,lat,lon,name):
    try:
        mydb = mysql.connector.connect(host="X",port="X",user="X",passwd="X",database="X")
        mycursor=mydb.cursor()
        #print (database_live)
        sql = "INSERT INTO sensors_gios (id_gios,city,address,lat,lon,name) VALUES (%s,%s,%s,%s,%s,%s)"
        val = (s_id,city_name,address_street,lat,lon,name)
        mycursor.execute(sql, val)
        mydb.commit()
        
        now = datetime.datetime.now()
        print(now)

        print(mycursor.rowcount, " new sensor inserted.")
    except mysql.connector.Error as e:
        print ("Error code:", e.errno)        # error number
        print ("SQLSTATE value:", e.sqlstate) # SQLSTATE value
        print ("Error message:", e.msg )      # error message
        print ("Error:", e)                # errno, sqlstate, msg values
        s = str(e)
        print ("Error:", s)                  # errno, sqlstate, msg values



url_sensors = "http://api.gios.gov.pl/pjp-api/rest/station/sensors/14"
url_address="http://api.gios.gov.pl/pjp-api/rest/station/findAll"

with urllib.request.urlopen(url_address) as url:
    s = url.read()
    data = json.loads(s)
   
    for dat in data:
        sensor_id = dat["id"]
        sensor_name = dat["stationName"]
        sensor_lat = dat["gegrLat"]
        sensor_lon = dat["gegrLon"]
        sensor_city = dat["city"]
        sensor_city_name = sensor_city["name"]
        sensor_address = dat["addressStreet"]
        if sensor_address is not None:
            sensor_address_street3=sensor_address.replace("ul.","")
            sensor_address_street2=sensor_address_street3.replace("al.","")
            sensor_address_street=sensor_address_street2.lstrip()
        #sensor_address_street=sensor_address_split[1]
        #print (sensor_address_street)
        insert_gios_sensors(sensor_id,sensor_city_name,sensor_address_street,sensor_lat,sensor_lon,sensor_name)