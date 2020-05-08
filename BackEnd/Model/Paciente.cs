using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
  public class Paciente
  {
    [Key]
    public int idPaciente { get; set; }
    public string nome_medico { get; set; }
    public string nome_paciente { get; set; }
    public string tipo_sanguineo { get; set; }
  }
}
