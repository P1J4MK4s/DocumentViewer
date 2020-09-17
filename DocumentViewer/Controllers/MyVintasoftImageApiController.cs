using Vintasoft.Imaging.Web.Api2Controllers;
namespace DocumentViewer.Controllers
{
    public class MyVintasoftImageApiController : VintasoftImageApi2Controller
    {
        public MyVintasoftImageApiController() 
            : base()
        {
            IsEmptySessionSupported = true;
        }
    }
}