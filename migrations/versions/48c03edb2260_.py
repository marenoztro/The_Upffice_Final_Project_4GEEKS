"""empty message

Revision ID: 48c03edb2260
Revises: e2631b756e0e
Create Date: 2022-10-25 01:39:08.267594

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '48c03edb2260'
down_revision = 'e2631b756e0e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('myspaces', sa.Column('message', sa.String(length=1000), nullable=False))
    op.create_unique_constraint(None, 'myspaces', ['message'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'myspaces', type_='unique')
    op.drop_column('myspaces', 'message')
    # ### end Alembic commands ###