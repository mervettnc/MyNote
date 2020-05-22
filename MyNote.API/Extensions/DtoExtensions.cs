﻿using MyNote.API.Dtos;
using MyNote.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyNote.API.Extensions
{
    public static class DtoExtensions
    {
        public static NoteDto ToNotDto(this Note note) //notedto çıktı  note girdi
        {
            return new NoteDto
            {
                Id = note.Id,
                Title = note.Title,
                Content = note.Content,
                CreationTime = note.CreationTime,
                ModificationTime = note.ModificationTime

            };

        }
    }
}