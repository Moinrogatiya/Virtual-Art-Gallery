using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserLoginService.Models;

namespace UserLoginService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class UserManagementController : ControllerBase
    {
        [HttpGet]
        public List<User> GetUsers()
        {
            List<User> users = new List<User>();
            using (var db = new virtual_art_galleryContext())
            {
                users = db.Users.ToList();
            }
            return users;
        }
        [HttpGet]
        public List<User> GetUsersWithArtist()
        {
            List<User> users = new List<User>();
            using (var db = new virtual_art_galleryContext())
            {
                users = db.Users.Include(add => add.Artist).Include(add => add.Area).Include(add => add.Role).ToList();
            }
            return users;
        }

        [HttpPost]
        public User SaveUser(User user)
        {
            using (var db = new virtual_art_galleryContext())
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

                db.Users.Add(user);

                //  db.SaveChanges();
                if (user.RoleId == 2)
                {
                    user.Artist.Id = user.Id;
                    // user.Artist.IdNavigation = user;
                    db.Artists.Add(user.Artist);
                }
                db.SaveChanges();
            }
            return user;

        }

        [HttpPost]
        public User Savebuyer(User user)
        {
            using (var db = new virtual_art_galleryContext())
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

                db.Users.Add(user);
                db.SaveChanges();
            }
            return user;

        }



        [HttpPost]
        public User VerifyLogin(User user)
        {
            User? logdb;
            using (var db = new virtual_art_galleryContext())
            {
                logdb = db.Users.Where(u => u.Username == user.Username).FirstOrDefault();
                if (logdb != null)
                {
                    if (BCrypt.Net.BCrypt.Verify(user.Password, logdb.Password))
                    {
                        if (logdb.RoleId == 2)
                        {
                            return db.Users.Where(u => u.Username == logdb.Username).Include(u => u.Artist).FirstOrDefault();
                        }
                        else if (logdb.RoleId == 3 || logdb.RoleId == 1)
                        {
                            return db.Users.Where(u => u.Username == logdb.Username).FirstOrDefault();
                        }
                    }
                }
                else
                {
                    Console.WriteLine("User not found in the database.");
                }
                return null; // Return null if user is not found or password verification fails
            }
        }
    }
}
