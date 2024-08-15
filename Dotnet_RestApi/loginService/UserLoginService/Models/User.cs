using System;
using System.Collections.Generic;

namespace UserLoginService.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string? FirstName { get; set; } = null!;
        public string? LastName { get; set; }
        public string? EmailId { get; set; } = null!;
        public string? Contact { get; set; } = null!;
        public byte[]? ProfilePhoto { get; set; }
        public int AreaId { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public sbyte Status { get; set; }
        public int RoleId { get; set; }
        public string? Address { get; set; } = null!;

        public virtual Area? Area { get; set; } = null!;
        public virtual Role? Role { get; set; } = null!;
        public virtual Artist? Artist { get; set; }
    }
}
