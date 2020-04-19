import modelFile from "./../models/File";

class FileController {
  async store(request, response) {
    try {
      const { originalname: name, filename: path } = request.file;

      const file = await modelFile.create({
        name,
        path,
      });

      return response.status(201).json(file);
    } catch (error) {
      return response.status(400).json({ error: "Erro interno" });
    }
  }
}

module.exports = new FileController();
