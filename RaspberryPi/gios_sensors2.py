import urllib.request
import json
import mysql.connector
import datetime


def update_db(sql1):
    try:
        mydb = mysql.connector.connect(host="X",port="X",user="X",passwd="X",database="X")
        mycursor=mydb.cursor()
        #print (database_live)
        mycursor.execute(sql1)
        mydb.commit()
        
        now = datetime.datetime.now()
        print(now)

        print(mycursor.rowcount, "  sensor updated.")
    except mysql.connector.Error as e:
        print ("Error code:", e.errno)        # error number
        print ("SQLSTATE value:", e.sqlstate) # SQLSTATE value
        print ("Error message:", e.msg )      # error message
        print ("Error:", e)                # errno, sqlstate, msg values
        s = str(e)
        print ("Error:", s)                  # errno, sqlstate, msg values

url_sensors = "http://api.gios.gov.pl/pjp-api/rest/station/sensors/"
mydb = mysql.connector.connect(host="X",port="X",user="X",passwd="X",database="X")
mycursor=mydb.cursor()
mycursor.execute("SELECT id_gios FROM sensors_gios")
myresult = mycursor.fetchall()

for x in myresult:
    url_sensors2=url_sensors+x[0]
    #print (url_sensors2)

    with urllib.request.urlopen(url_sensors2) as url2:
        s2 = url2.read()
        sensors_data = json.loads(s2)
   
        for sdat in sensors_data:
            sensor_id = sdat ["id"]
            station_id = sdat["stationId"]
            sensor_param = sdat["param"]
            sensor_param_formula=sensor_param["paramFormula"]
            print (sensor_param_formula)
            if str(sensor_param_formula).endswith("5"):
                sql1="UPDATE sensors_gios SET pm25="+str(sensor_id)+" WHERE id_gios="+str(station_id)
            
            else:
                sql1="UPDATE sensors_gios SET "+sensor_param_formula.lower()+"="+str(sensor_id)+" WHERE id_gios="+str(station_id)
            
            #print (sensor_param_formula)
            #sql1="UPDATE sensors_gios SET "+sensor_param_formula2.lower()+"=1 WHERE id_gios="+str(sensor_id)
            update_db(sql1)           
            #sensor_address_street=sensor_address_split[1]
        #print (sensor_address_street)
       # insert_gios_sensors(sensor_id,sensor_city_name,sensor_address_street,sensor_lat,sensor_lon,sensor_name)
