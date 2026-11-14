# Use official Python 3.11 slim image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements/base.py requirements/production.py ./requirements/
# If using a requirements.txt or requirements folder structure:
COPY requirements/ ./requirements/
RUN pip install --no-cache-dir -r requirements/production.py

# Copy project code
COPY . /app/

# Expose port
EXPOSE 8000

# Run entrypoint script
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]