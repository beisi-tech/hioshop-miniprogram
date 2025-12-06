const Base = require("./base.js");
const fs = require("fs");
const path = require("path");

module.exports = class extends Base {
  /**
   * 通用图片上传接口
   * POST /admin/upload/image
   * 参数：
   *   - file: 图片文件
   *   - type: 上传类型 (goods/category/ad/gallery/detail)
   * 返回：
   *   - fileUrl: 相对路径，如 /static/upload/goods/xxx.jpg
   */
  async imageAction() {
    const file = this.file("file");
    const type = this.post("type") || "common";

    // 验证文件存在
    if (think.isEmpty(file)) {
      return this.fail("请选择要上传的图片");
    }

    // 验证文件类型
    const allowTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowTypes.includes(file.type)) {
      return this.fail("只支持 jpg/png/gif/webp 格式的图片");
    }

    // 验证上传类型
    const allowUploadTypes = ["goods", "category", "ad", "gallery", "detail", "common"];
    const uploadType = allowUploadTypes.includes(type) ? type : "common";

    // 生成文件名和路径
    const fileType = file.type.split("/")[1];
    const fileName = think.uuid(32) + "." + fileType;
    const relativePath = `/static/upload/${uploadType}/${fileName}`;
    const absolutePath = path.join(think.ROOT_PATH, "www", relativePath);

    // 确保目录存在
    const dir = path.dirname(absolutePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 保存文件
    try {
      const readStream = fs.createReadStream(file.path);
      const writeStream = fs.createWriteStream(absolutePath);
      readStream.pipe(writeStream);

      return this.success({
        name: fileName,
        fileUrl: relativePath,
      });
    } catch (err) {
      return this.fail("图片上传失败：" + err.message);
    }
  }

  /**
   * 删除图片接口
   * POST /admin/upload/delete
   * 参数：
   *   - fileUrl: 图片相对路径
   */
  async deleteAction() {
    const fileUrl = this.post("fileUrl");

    if (!fileUrl) {
      return this.fail("请提供要删除的图片路径");
    }

    // 安全检查：只允许删除 /static/upload/ 目录下的文件
    if (!fileUrl.startsWith("/static/upload/")) {
      return this.fail("无效的图片路径");
    }

    const absolutePath = path.join(think.ROOT_PATH, "www", fileUrl);

    try {
      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
      }
      return this.success("删除成功");
    } catch (err) {
      return this.fail("删除失败：" + err.message);
    }
  }
};
