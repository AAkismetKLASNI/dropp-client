# ❤️ Dropp - Fullstack - Next - Nest

Аналог Pinterest, который позволяет делиться своими идеями.

https://github.com/user-attachments/assets/f3050479-d33c-440d-a4ad-d8073b096304

## 🚀 Технологии

**Основной стек:**
- **Frontend:** Next.js 15, Framer Motion, Tanstack/React-Query, Tailwind CSS, React Hook Form
- **Backend:** NestJS, Prisma, BullMQ, Axios
- **Хранение:** S3 Minio, Postgresql
- **Другие:** ...

## 🔧 Установка и запуск

### Предварительные требования
- Node.js 18+
- bun, npm или yarn
- Docker

### Шаги по запуску

1. **Клонирование клиента**
   ```bash
   git clone https://github.com/your-username/dropp-client.git

2. **Клонирование сервера**
   ```bash
   git clone https://github.com/AAkismetKLASNI/dropp-server.git
   
3. **Внедрение .env файла на client**
   ```bash
   NEXT_PUBLIC_SERVER_API=http://localhost:4200/api
   NEXT_PUBLIC_DOMAIN=localhost
4. **Внедрение .env файла на server**
   ```bash
   CLIENT_API=http://localhost:3000
   SERVER_DOMAIN=localhost
    
   JWT_SECRET=7654qwe
   DATABASE_URL='postgresql://postgres:123456@db:5432/dropp?schema=public'
    
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=123456
   POSTGRES_DB=dropp
    
   MINIO_PUBLIC_ENDPOINT=localhost
   MINIO_ENDPOINT=minio
   MINIO_PORT=9000
   MINIO_ROOT_USER=myadmin
   MINIO_ROOT_PASSWORD=mypassword123
   MINIO_BUCKET_NAME=pictures
   MINIO_USE_SSL=false
    
   BULLMQ_PORT=6379
   BULLMQ_ENDPOINT=redis
5. **Скачать и вставить в корень файл docker-compose.yaml**
   ```bash
   https://drive.google.com/file/d/12eDf6akr9EvJ0MDL7Fq3thCtfLkAo8lH/view?usp=drive_link
6. **Запустить в терминале команду**
   ```bash
   docker-compose up --build

Вот и все
    
  

  
