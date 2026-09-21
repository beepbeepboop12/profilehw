from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "강다현 자기소개 페이지에 오신 것을 환영합니다!"}


@app.get("/health")
def health_check():
    return {"status": "ok"}