import tornado.ioloop
import tornado.web
import requests
import json

class basehandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "http://localhost:3000")
        self.set_header("Access-Control-Allow-Headers", "Authorization,Content-Type")
        self.set_header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")

    def options(self, *args, **kwargs):
        self.set_status(204)
        self.finish()

class mainhandler(basehandler):
    def get(self):
        self.write('Welcome to the Gaama Restaurant')

class Menu(basehandler):
    def get(self):
        url=f"https://www.themealdb.com/api/json/v1/1/categories.php"
        response=requests.get(url)
        res=response.json()
        self.write(res)

class Randommeal(basehandler):
    def get(self):
        url=f"https://www.themealdb.com/api/json/v1/1/random.php"
        response=requests.get(url)
        res=response.json()
        self.write(res)

class mealbycategory(basehandler):
    def get(self):
        category=self.get_argument('category')
        url=f"https://www.themealdb.com/api/json/v1/1/filter.php?c={category}"
        response=requests.get(url)
        res=response.json()
        self.write(res)

class mealbyarea(basehandler):
    def get(self):
        area=self.get_argument('area')
        url=f"https://www.themealdb.com/api/json/v1/1/filter.php?a={area}"
        response=requests.get(url)
        res=response.json()
        self.write(res)

class mealbyingredient(basehandler):
    def get(self):
        ingredient=self.get_argument('ingredient')
        url=f"https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}"
        response=requests.get(url)
        res=response.json()
        self.write(res)


class ingredlist(basehandler):
    def get(self):
        url=f"https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        response=requests.get(url)
        res=response.json()
        self.write(res)

def make_app():
    return tornado.web.Application([
        (r"/",mainhandler),
        (r"/menu",Menu),
        (r"/rand",Randommeal),
        (r"/catgy",mealbycategory),
        (r"/aremeal",mealbyarea),
        (r"/ingredlist",ingredlist),
        (r"/ingredmeal",mealbyingredient),
    ]
    )
if __name__=="__main__":
    app=make_app()
    app.listen(8005)
    print("server is running at http://localhost:8005")
    tornado.ioloop.IOLoop.current().start()
