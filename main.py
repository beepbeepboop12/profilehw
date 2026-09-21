from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "강다현 자기소개 페이지에 오신 것을 환영합니다!"}


@app.get("/health")
def health_check():
    return {"status": "ok"}