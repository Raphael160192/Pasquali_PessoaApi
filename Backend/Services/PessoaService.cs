using System.Text.Json;
using PessoasAPI.Models;

namespace PessoasAPI.Services
{
    public class PessoaService
    {
        private readonly string _filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "pessoas.json");

        public List<Pessoa> GetAll()
        {
            if (!File.Exists(_filePath))
                return new List<Pessoa>();

            var json = File.ReadAllText(_filePath);
            return JsonSerializer.Deserialize<List<Pessoa>>(json) ?? new List<Pessoa>();
        }

        public void SaveAll(List<Pessoa> pessoas)
        {
            var json = JsonSerializer.Serialize(pessoas, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(_filePath, json);
        }

        public void Add(Pessoa pessoa)
        {
            var pessoas = GetAll();
            pessoa.Id = pessoas.Any() ? pessoas.Max(p => p.Id) + 1 : 1;
            pessoas.Add(pessoa);
            SaveAll(pessoas);
        }

        public bool Delete(int id)
        {
            var pessoas = GetAll();
            var pessoa = pessoas.FirstOrDefault(p => p.Id == id);
            if (pessoa == null) return false;

            pessoas.Remove(pessoa);
            SaveAll(pessoas);
            return true;
        }
    }
}