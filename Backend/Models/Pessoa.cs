namespace PessoasAPI.Models
{
    public class Pessoa
    {
        public int Id { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public string Genero { get; set; }
        public string Endereco { get; set; }
        public int Idade { get; set; }
        public string Municipio { get; set; }
        public string Estado { get; set; }
    }
}
