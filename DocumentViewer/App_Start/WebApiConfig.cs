using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DocumentViewer
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Конфигурация и службы веб-API

            // Маршруты веб-API
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DemoApi",
                routeTemplate: "api/{controller}/{action}"
            );
        }
    }
}
