using System;
using System.Collections.Generic;

namespace UserLoginService.Models
{
    public partial class Area
    {
        public Area()
        {
            Users = new HashSet<User>();
        }

        public int AreaId { get; set; }
        public string AreaName { get; set; } = null!;
        public int Pincode { get; set; }
        public int CityId { get; set; }

        public virtual City? City { get; set; } = null!;
        public virtual ICollection<User>? Users { get; set; }
    }
}
