﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyNote.API.Dtos
{
    public class NewNoteDto
    {
        [Display(Name ="Title")]
        [Required(ErrorMessage ="{0} is required")]
        [StringLength(100,ErrorMessage ="{} cannot be longer than {1} characters")]
        public string Title { get; set; }
        public string Content { get; set; }
    }
}