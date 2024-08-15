using System;
using System.Collections.Generic;

namespace UserLoginService.Models
{
    public partial class Artist
    {
        public int Id { get; set; }
        public string? About { get; set; }

        public virtual User? IdNavigation { get; set; } = null!;
    }
}
